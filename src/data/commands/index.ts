import { EntityCommands } from "../../command/EntityCommands";
import { DomainUnit } from "../DomainUnit";
import { AddFieldCommand } from "./AddField";
import { RemoveFieldCommand } from "./RemoveField";

export const DataCommands:EntityCommands<DomainUnit> = [AddFieldCommand, RemoveFieldCommand];

