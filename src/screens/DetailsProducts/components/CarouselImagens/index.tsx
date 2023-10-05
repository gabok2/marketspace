import { api } from "@services/api";
import { useState } from "react";
import { Dimensions, Image, View, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";
const { width } = Dimensions.get("window");

type ProductImage = {
  path: string;
  id: string;
};

type CarouselImagensProps = {
  product_images: ProductImage[];
};

export function CarouselImagens({ product_images }: CarouselImagensProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const imagens = product_images.map((item) => {
    return `${api.defaults.baseURL}/images/${item.path}`;
  });

  console.log(imagens);

  return (
    <View>
      <Carousel
        loop={false}
        pagingEnabled
        snapEnabled
        onProgressChange={(_, absoluteProgress) =>
          setActiveIndex(Math.round(absoluteProgress))
        }
        width={width}
        height={width / 1.5}
        data={imagens}
        renderItem={({ item, index }) => (
          <Image
            source={{
              uri: item,
            }}
            width={width}
            height={width / 1.5}
            resizeMode="cover"
          />
        )}
      />
    </View>
  );
}
