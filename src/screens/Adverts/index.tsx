import { api } from "@services/api";
import { useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export function Adverts() {
  const [product, setProduct] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const products = async () => {
    try {
      const response = await api.get("/products/");
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Teste2", product);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text>{product[0]?.name}</Text>
      )}
    </View>
  );
}
