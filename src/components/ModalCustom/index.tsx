import { Modal } from "react-native";
import { Content, Overlay, Row, Title } from "./styles";
import { Button } from "../Button";

export function ModalCustom() {
  return (
    <Modal
      visible={false}
      animationType="fade"
      transparent={true}
      statusBarTranslucent
    >
      <Overlay>
        <Content>
          <Title>Deseja realmente excluir o registro da refeição?</Title>

          <Row>
            <Button style={{ width: "50%" }} secondary label="Cancelar" />
            <Button style={{ width: "50%" }} label="Sim, excluir" />
          </Row>
        </Content>
      </Overlay>
    </Modal>
  );
}
