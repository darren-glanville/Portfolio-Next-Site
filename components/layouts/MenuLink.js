import { Link, Button, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function MenuLink(props) {
    const router = useRouter();
    const thisPage = router.asPath === props.link ? true : false;

    return (
        <Link
            href={props.link}
            style={{ textDecoration: "none" }}
            p="1"
            _focus={{ shadow: "none" }}
        >
            <Button colorScheme="purple" variant="ghost" isActive={thisPage}>
                {props?.text ?? "Link"}
            </Button>
        </Link>
    );
}
