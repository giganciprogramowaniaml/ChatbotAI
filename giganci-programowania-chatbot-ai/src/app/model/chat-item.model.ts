import { ChatItemType } from "./chat-item-type.model";

export class ChatItem {
    text!: string;
    type!: ChatItemType;
    userName!: string;
    avatar!: string;
}