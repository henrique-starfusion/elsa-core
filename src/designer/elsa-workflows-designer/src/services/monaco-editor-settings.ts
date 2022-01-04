import {Service} from "typedi";
import store from "../data/store";

@Service()
export class MonacoEditorSettings {
  get monacoLibPath(): string {
    return store.monacoLibPath;
  }

  set monacoLibPath(value: string) {
    store.monacoLibPath = value;
  }
}
