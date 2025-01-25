import { ChatItemType } from "./chat-item-type.model";
import { ThumbType } from "./thumb-type.model";

export class ChatItem {
    text!: string;
    type!: ChatItemType;
    userName!: string;
    avatar!: string;
    thumb!: ThumbType;
}