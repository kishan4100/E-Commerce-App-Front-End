import {
  Facebook,
  Instagram,
  Mail,
  Payment,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  color: black;
  background-color: white;
`;
const Left = styled.div`
  flex: 1;
  padding: 15px;
`;
const Title = styled.h1`
  font-size: ${(props) => props.fz};
  padding-bottom: 10px;
`;
const Desc = styled.p`
  padding-bottom: 10px;
  font-size: 1.3rem;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  margin: 10px;
  cursor: pointer;
  font-size: 1.3rem;
  background-color: #${(props) => props.bg};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Center = styled.div`
  flex: 1;
  padding: 25px;
  padding-left: 30px;
`;

const List = styled.ul`
  width: 80%;
  margin: 0;
  padding: 10px 0px;

  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1.3rem;
`;
const Right = styled.div`
  flex: 1;
  padding: 15px;
`;
const ContactItem = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Title fz="3rem">FABLY</Title>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Desc>
        <SocialContainer>
          <SocialIcon bg="3B5998">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="f2003c">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="00acee">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title fz="1.75rem">Useful Links</Title>
        <List>
          <ListItem> Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishLsit</ListItem>
        </List>
      </Center>
      <Right>
        <Title fz="2rem">Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "5px" }} />
          258 Postal Colony , North Banglore 87878
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "5px" }} /> +91 9845948121
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "5px" }} /> Contact@XYZ.com
        </ContactItem>
        <Payment style={{ marginTop: "15px" }}>Payment</Payment>
      </Right>
    </Container>
  );
}

export default Footer;
