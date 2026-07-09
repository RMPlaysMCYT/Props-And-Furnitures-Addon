import { 
    world 
} from "@minecraft/server";
import {
    ActionFormData,
    MessageFormData,
    ModalFormData
} from "@minecraft/server-ui";

const form = new ActionFormData();
form.title("Welcome")
form.body("Hi there and thank you to download this addon and I hope you enjoy \nPlease Rate Me a 5-star to support of the development. \nFollow me on social media accounts below:\n\n===============================\nTwitter/X: @rmplaysmc_yt \nYT: Ronnel Mitra \nMCPEDL: RMPlaysMC YT \nCurseforge: RMPlaysMC YT\n===============================\n");
form.button("Blocks");
form.button("Entity");
form.button("Features");
form.button("Credits");
form.button("Support And Donate");
form.button("Okay and Let's get started!!");

world.afterEvents.itemUse.subscribe(
    (event) => {
        const { source, itemStack } = event;
        if (itemStack.typeId === "pafa:book") {
            form.show(source).then(
                (response) => {
                    if (response.canceled) return;
                    FormIntro(source, response.selection)
                }
            );
        }
    }
);

function FormIntro(player, selection) {
    switch (selection) {
        case 0:
            Blocks(player)
            break;
        case 1:
            Entity(player)
            break;
        case 2:
            Features(player)
            break;
        case 3:
            Credits(player)
            break;
        case 4:
            SupportAndDonate(player)
            break;
        case 5:
            break;
    }
}

function Blocks(player) {
    const CreditsForm = new ActionFormData();
    CreditsForm.title('Credits')
    CreditsForm.body(
        { "rawtext": [{ "text": "This Section is Currently under development stay tuned for more updates, subscribe now on patreon to keep updated and join to my discord server for more info" }, { "text": "\n" }, { "text": "Join at my discord channel and here's the link: " }, { "text": "\n" }, { "text": "===============================" }, { "text": "\n" }] })
    CreditsForm.button("Exit");
    CreditsForm.show(player).then(
        (response) => {
            if (response.canceled) {
                FormIntro(player,);
            } else if (response.selection === 0) {
                FormIntro(player); // go back to main menu
            }
        }
    );
}

function Entity(player) {
    const CreditsForm = new ActionFormData();
    CreditsForm.title('Credits')
    CreditsForm.body({ "rawtext": [{ "text": "This Section is Currently under development stay tuned for more updates, subscribe now on patreon to keep updated and join to my discord server for more info" }, { "text": "\n" }, { "text": "Join at my discord channel and here's the link: " }, { "text": "\n" }, { "text": "===============================" }] })
    CreditsForm.button("Exit");
    CreditsForm.show(player).then(
        (response) => {
            if (response.canceled) {
                FormIntro(player);
            } else if (response.selection === 0) {
                FormIntro(player); // go back to main menu
            }
        }
    );
}

function Features(player) {
    const CreditsForm = new ActionFormData();
    CreditsForm.title('Credits')
    CreditsForm.body({ "rawtext": [{ "text": "These are the features of this addon so that everyone can enjoy" }, { "text": "\n" }, { "text": "- Over 300 Furnitures Added more stuff coming soon" }, { "text": "\n" }, { "text": "- Suitable for Casual, Aesthetic and City Based Purposes and builds" }, { "text": "\n" }, { "text": "- Custom Blocks and Items are no longer experimental" }, { "text": "\n" }, { "text": "-  and More.." }, { "text": "\n" }, { "text": "===============================" }] })
    CreditsForm.button("Exit");
    CreditsForm.show(player).then(
        (response) => {
            if (response.canceled) {
                FormIntro(player);
            } else if (response.selection === 0) {
                FormIntro(player); // go back to main menu
            }
        }
    );
}

function Credits(player) {
    const CreditsForm = new ActionFormData();
    CreditsForm.title('Credits')
    CreditsForm.body({ "rawtext": [{ "text": "This addon has been worked for a very long time and now we moved from experimentals." }, { "text": "\n" }, { "text": "Credits to the people, groups and tools used in this addon" }, { "text": "\n" }, { "text": "- Alien Edds" }, { "text": "\n" }, { "text": "- Bedrock Wiki" }, { "text": "\n" }, { "text": "- Bedrock Addons Discord Group" }, { "text": "\n" }, { "text": "- Monorogu" }, { "text": "\n" }, { "text": " - EndXenoc" }, { "text": "\n" }, { "text": "\n" }, { "text": "© 2021 - 2024 RMPlaysMC YT, All rights reserved." }, { "text": "\n" }, { "text": "===============================" }] })
    CreditsForm.button("Exit");
    CreditsForm.show(player).then(
        (response) => {
            if (response.canceled) {
                FormIntro(player);
            } else if (response.selection === 0) {
                FormIntro(player); // go back to main menu
            }
        }
    );
}

function SupportAndDonate(player) {
    const CreditsForm = new ActionFormData();
    CreditsForm.title('Credits')
    CreditsForm.body({ "rawtext": [{ "text": "This Addon was working for over 2 years and it was developed by one person and I'lkeep working for more updates and to have more features to target more audience and players" }, { "text": "\n" }, { "text": "===============================" }, { "text": "\n" }, { "text": "You can support me by subscribe to my patreon or sending any amount or tips" }, { "text": "\n" }, { "text": "Patreon: https://www.patreon.com/RMPlaysMC_YT" }, { "text": "\n" }, { "text": "\n" }, { "text": "Benefits:" }, { "text": "\n" }, { "text": "\n * Unlimited Downloads" }, { "text": "\n * No Advertisements" }, { "text": "\n * Direct Support to the creator" }, { "text": "\n * Daily Builds and Updates" }, { "text": "\n" }, { "text": "\n" }, { "text": "===============================" }] })
    CreditsForm.button("Exit");
    CreditsForm.show(player).then(
        (response) => {
            if (response.canceled) {
                FormIntro(player);
            } else if (response.selection === 0) {
                FormIntro(player); // go back to main menu
            }
        }
    );
}