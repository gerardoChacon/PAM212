import React, { useEffect, useRef, useState } from "react";
import {
  View, Text, StyleSheet, ImageBackground, TextInput, Button,
  Alert, Switch, TouchableWithoutFeedback, Keyboard, Animated, Image, Platform, KeyboardAvoidingView
} from "react-native";

export default function Repaso1Screen() {
  // Hooks arriba
  const [showForm, setShowForm] = useState(false);
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  // Form
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [acepta, setAcepta] = useState(false);

  const correoOk = /^\S+@\S+\.\S+$/.test(correo);
  const puedeEnviar = nombre.trim().length > 0 && correoOk && acepta;

  const onRegister = () => {
    if (!nombre.trim() || !correo.trim()) return Alert.alert("Error", "No dejes campos vacíos");
    if (!correoOk) return Alert.alert("Error", "Correo inválido");
    if (!acepta) return Alert.alert("Error", "Debes aceptar Términos y Condiciones");
    Alert.alert("Registro", `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 5, useNativeDriver: true }),
    ]).start();
    const t = setTimeout(() => setShowForm(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // Splash simple con tu logo
  if (!showForm) {
    return (
      <View style={ss.splash}>
        <Animated.Image
          source={require("../assets/logo-manu.png")} // cambia si tu logo tiene otro nombre
          style={[ss.splashImg, { opacity: fade, transform: [{ scale }] }]}
          resizeMode="contain"
        />
      </View>
    );
  }

  // Pantalla principal con fondo
  return (
    <ImageBackground
      source={require("../assets/backgroung-leclerc.png")}
      style={s.bg}
      resizeMode="cover"
    >
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={s.card}>
            <View style={s.header}>
              <Image source={require("../assets/logo-manu.png")} style={s.logo} />
              <Text style={s.title}>Registro de Usuario</Text>
            </View>

            <TextInput
              style={s.inp}
              placeholder="Nombre completo"
              value={nombre}
              onChangeText={setNombre}
              autoCapitalize="words"
              placeholderTextColor="#888"
            />

            <TextInput
              style={s.inp}
              placeholder="Correo electrónico"
              value={correo}
              onChangeText={(t) => setCorreo(t.toLowerCase())}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholderTextColor="#888"
            />

            <View style={s.row}>
              <Switch value={acepta} onValueChange={setAcepta} />
              <Text style={s.tyc}>Acepto Términos y Condiciones</Text>
            </View>

            <Button title="Registrarse" onPress={onRegister} disabled={!puedeEnviar} />

            {/* pistas visibles básicas */}
            {!nombre.trim() ? <Text style={s.hint}>· Falta nombre</Text> : null}
            {correo.length > 0 && !correoOk ? <Text style={s.hint}>· Correo inválido</Text> : null}
            {!acepta ? <Text style={s.hint}>· Acepta T&C</Text> : null}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const ss = StyleSheet.create({
  splash: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#0a74da" },
  splashImg: { width: 140, height: 140 },
});

const s = StyleSheet.create({
  bg: { flex: 1 },
  card: {
    margin: 20,
    marginTop: 40,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.92)",
  },
  header: { alignItems: "center", marginBottom: 8 },
  logo: { width: 72, height: 72, resizeMode: "contain", marginBottom: 8 },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 8 },
  inp: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    color: "#111",
  },
  row: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 12 },
  tyc: { flex: 1 },
  hint: { marginTop: 6, color: "#555" },
});
