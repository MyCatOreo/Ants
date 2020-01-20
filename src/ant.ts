import { useState } from "react";

const initalAnts: Ant[] = [];

export function useAnts() {
  return useState<Ant[]>(initalAnts);
}
