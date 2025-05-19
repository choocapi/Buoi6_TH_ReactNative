import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Button, HelperText, TextInput } from "react-native-paper";
import { colors } from "@/utils/colors";
import { login } from "@/services/AuthService";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgHelperEmail, setMsgHelperEmail] = useState("");
  const [msgHelperPassword, setMsgHelperPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.length == 0) {
      setMsgHelperEmail("Email is required");
      return true;
    } else if (!emailRegex.test(email)) {
      setMsgHelperEmail("Email is invalid");
      return true;
    } else {
      setMsgHelperEmail("");
      return false;
    }
  };

  const validatePassword = (password: string) => {
    if (password.length == 0) {
      setMsgHelperPassword("Password is required");
      return true;
    } else if (password.length < 8) {
      setMsgHelperPassword("Password must be at least 8 characters long");
      return true;
    } else {
      setMsgHelperPassword("");
      return false;
    }
  };

  const handleLogin = async () => {
    const isEmailError = validateEmail(email);
    const isPasswordError = validatePassword(password);
    setEmailError(isEmailError);
    setPasswordError(isPasswordError);
    if (isEmailError && isPasswordError) {
      Alert.alert("Cảnh báo", "Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const res = await login(email, password);
    if (res.success) {
      console.log("User data: ", res.data[0]);
      Alert.alert("Thành công", "Đăng nhập thành công!", [
        {
          text: "Ok",
          onPress: () =>
            navigation.navigate("Home", {
              screen: "HomeTab",
              params: { username: res.data[0].username },
            }),
          style: "destructive",
        },
      ]);
    } else {
      Alert.alert("Lỗi", "Đăng nhập thất bại!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter email"
          left={<TextInput.Icon icon="email-outline" />}
          mode="outlined"
          value={email}
          onChangeText={(email) => {
            setEmail(email);
            setEmailError(validateEmail(email));
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          theme={{
            colors: {
              primary: colors.primary,
            },
          }}
        />
        <HelperText type="error" visible={emailError}>
          {msgHelperEmail}
        </HelperText>
        <TextInput
          placeholder="Enter password"
          left={<TextInput.Icon icon="lock-outline" />}
          right={
            <TextInput.Icon
              icon={showPassword ? "eye-off-outline" : "eye-outline"}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          mode="outlined"
          value={password}
          onChangeText={(password) => {
            setPassword(password);
            setPasswordError(validatePassword(password));
          }}
          secureTextEntry={!showPassword}
          theme={{
            colors: {
              primary: colors.primary,
            },
          }}
        />
        <HelperText type="error" visible={passwordError}>
          {msgHelperPassword}
        </HelperText>
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </View>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.linkText}>Create a new account?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => {}}>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.membersContainer}>
        <Text style={styles.memberText}>Châu Minh Đương - 2124802010036</Text>
        <Text style={styles.memberText}>Phan Minh Đại - 2124802010236</Text>
        <Text style={styles.memberText}>Nguyễn Kim Thịnh - 2124802010810</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  formContainer: {
    marginTop: 32,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: colors.primary,
    paddingVertical: 6,
  },
  linkContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  linkButton: {
    marginBottom: 8,
  },
  linkText: {
    color: colors.primary,
    fontSize: 16,
  },
  membersContainer: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 8,
  },
  memberText: {
    color: "black",
    fontSize: 18,
    marginVertical: 4,
  },
});
