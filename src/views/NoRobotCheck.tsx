import { Flex, Recaptcha, SubTitle } from "../components";

const NoRobotCheck = () => {
  return (
    <Flex direction={"column"} gap={20} justify="center">
      <SubTitle
        title={"Please proof that you are not a robot"}
        textAlign="center"
      />
      <Recaptcha />
    </Flex>
  );
};

export default NoRobotCheck;
