import { create } from "zustand";
import { type Editor } from "@tiptap/react";

interface EditorStore {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
}
