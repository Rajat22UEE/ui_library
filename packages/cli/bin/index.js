#!/usr/bin/env node
import { program } from "commander";
import { downloadComponent } from "../utils.js";

program
  .command("add <component>")
  .description("Add a UI component to your project")
  .action(async (component) => {
    await downloadComponent(component);
  });

program.parse(process.argv);
