import { FC } from "react";
import { useRouter } from "next/router";

import { Grid, Card, Row, Text } from "@nextui-org/react";

import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={3} key={pokemon.id}>
      <Card hoverable clickable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="center">
            <Text weight="bold" transform="capitalize">
              {pokemon.name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
