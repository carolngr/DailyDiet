import { View, Text, SafeAreaView, SectionList } from "react-native";
import { Container, DataNow, Hour, Separator, Status, Title } from "./styles";
import { Description } from "@components/Card/styles";

export function GroupCard() {
  const data = [
    {
      title: "12.08.22",
      data: [
        {
          id: "1",
          hours: "20:00",
          description: "X-Tudo",
          status: "vermelho",
        },
        {
          id: "2",
          hours: "20:00",
          description: "X-Tudo",
          status: "vermelho",
        },
      ],
    },
    {
      title: "11.08.22",
      data: [
        {
          id: "1",
          hours: "20:00",
          description: "X-Tudo",
          status: "vermelho",
        },
        {
          id: "2",
          hours: "20:00",
          description: "X-Tudo",
          status: "vermelho",
        },
      ],
    },
    {
      title: "10.08.22",
      data: [
        {
          id: "1",
          hours: "19:00",
          description: "X-Fraldinha",
          status: "vermelho",
        },
        {
          id: "2",
          hours: "20:00",
          description: "X-Frango",
          status: "vermelho",
        },
        {
          id: "3",
          hours: "23:00",
          description: "X-Frango",
          status: "vermelho",
        },
        {
          id: "4",
          hours: "00:00",
          description: "X-Dog",
          status: "vermelho",
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Container>
              <Hour>{item.hours}</Hour>
              <Separator>|</Separator>
              <Title>{item.description}</Title>
              <Status />
            </Container>
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <DataNow>{title}</DataNow>
        )}
        stickySectionHeadersEnabled={true}
      />
    </SafeAreaView>
  );
}
