import { supabase } from "../../supabase";

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.log(error.message);
    throw new Error("Login failed");
  }
  return data;
}
