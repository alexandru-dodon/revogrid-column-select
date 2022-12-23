import { SelectConfig } from './type';
import { SelectColumnEditor } from './editor';
export default class SelectColumnType {
    readonly editor: typeof SelectColumnEditor;
    beforeSetup: (col: SelectConfig) => void;
    cellTemplate: (h: any, { model, prop, column }: any) => any[];
}
export declare const CreateSelectColumnType: typeof SelectColumnType;
