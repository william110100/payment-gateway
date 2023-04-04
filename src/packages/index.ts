import { lazy } from "react";

const Breadcrumb = lazy(() => import("./Breadcrumb"));
const Button = lazy(() => import("./Button"));
const Card = lazy(() => import("./Card"));
const Checkbox = lazy(() => import("./Checkbox"));
const Column = lazy(() => import("./Container/Column"));
const Container = lazy(() => import("./Container"));
const Input = lazy(() => import("./Input"));
const Link = lazy(() => import("./Link"));
const Row = lazy(() => import("./Container/Row"));
const Text = lazy(() => import("./Text"));
const Textarea = lazy(() => import("./Textarea"));

export {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Column,
  Container,
  Input,
  Link,
  Row,
  Text,
  Textarea,
};
