
import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { middleware , errorHandler } from "supertokens-node/framework/express";
import { ensureSuperTokensInit } from "./config/superToken.js";
import { verifySession } from "supertokens-node/recipe/session/framework/express";

ensureSuperTokensInit();

let app = express();

app.use(
	cors({
		origin: "http://localhost:3000",
		allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
		credentials: true,
	}),
);
app.use(express.json())
// IMPORTANT: CORS should be before the below line.
app.use(middleware());

// ...your API routes


// Public Route
app.get("/api/healthz", (req, res) => {
	res.json({
		message: "Server is running",
	});
});

// Protected Route
app.get("/api/auth/user", verifySession(), async (req, res) => {
	const session = req.session
	const userId = session.getUserId()
	res.json(
		{
			userId,
			AccessTokenPayload: session.getAccessTokenPayload(),
			user: await supertokens.getUser(userId),
		}
	);
});

app.use(errorHandler());

// your own error handler
app.use((err, req, res, next) => {
    console.log(err);
});
app.listen(5000, () => {
    console.log("server started at PORT 5000")
})