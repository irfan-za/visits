import {
  Facebook,
  Instagram,
  Link,
  Mail,
  MessageCircleMore,
  Twitter,
} from "lucide-react";

export const socialMedia = [
  {
    name: "Facebook",
    icon: <Facebook className="mr-2 h-4 w-4" />,
  },
  {
    name: "Instagram",
    icon: <Instagram className="mr-2 h-4 w-4" />,
  },
  {
    name: "Whatsapp",
    icon: <MessageCircleMore className="mr-2 h-4 w-4" />,
  },
  {
    name: "Twitter",
    icon: <Twitter className="mr-2 h-4 w-4" />,
  },
];

export const LinkTypes = [
  {
    name: "link",
    icon: <Link className="mr-2 h-4 w-4" />,
  },
  {
    name: "whatsapp",
    icon: <MessageCircleMore className="mr-2 h-4 w-4" />,
  },
  {
    name: "email",
    icon: <Mail className="mr-2 h-4 w-4" />,
  },
];
