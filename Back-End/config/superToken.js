import ThirdPartyNode from "supertokens-node/recipe/thirdparty";
import SessionNode from "supertokens-node/recipe/session";
import Dashboard from "supertokens-node/recipe/dashboard";
import UserRoles from "supertokens-node/recipe/userroles";
import { appInfo } from "./appInfo.js";
import SuperTokens from "supertokens-node";
import { configDotenv } from "dotenv";
configDotenv();
export let backendConfig = () => {
    return {
        framework: "express",
        supertokens: {
            // this is the location of the SuperTokens core.
            connectionURI: process.env.SUPER_TOKENS_CONNECTION_URI || "http://localhost:3567",
        },
        appInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: [
            ThirdPartyNode.init({
                signInAndUpFeature: {
                    providers: [
                        // We have provided you with development keys which you can use for testing.
                        // IMPORTANT: Please replace them with your own OAuth keys for production use.
                        {
                            config: {
                                thirdPartyId: "google",
                                clients: [
                                    {
                                        // Get both of them from google cloud console.
                                        clientId: process.env.GOOGLE_CLIENT_ID,
                                        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                                    },
                                ],
                            },
                        },
                    ],
                },
            }),
            SessionNode.init(),
            Dashboard.init(),
            UserRoles.init(),
        ],
    };
};

let initialized = false;
export function ensureSuperTokensInit() {
    if (!initialized) {
        SuperTokens.init(backendConfig());
        initialized = true;
    }
}
