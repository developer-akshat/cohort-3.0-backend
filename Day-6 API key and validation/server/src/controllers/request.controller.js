import apiModel from "../../models/api.model.js";

const supportedApis = ["weather", "products", "health"];

const requestController = async (req, res) => {
    const key = req.get("x-api-key");
    const { apis } = req.body;

    if (!key) {
      return res.status(401).json({
        message: "API key is required"
      });
    }

    const user = await apiModel.findOne({ key });

    if (!user) {
      return res.status(401).json({
        message: "Invalid API key"
      });
    }

    if (
      !Array.isArray(apis) ||
      apis.length === 0 ||
      !apis.every(api => supportedApis.includes(api)) ||
      new Set(apis).size !== apis.length
    ) {
      return res.status(400).json({
        message: "Invalid API request",
        supportedApis
      });
    }

    // Save the user's requested APIs, not granted permissions.
    user.requestedApis = [
      ...new Set([...user.requestedApis, ...apis])
    ];

    await user.save();

    return res.status(200).json({
      message: "API access request submitted for approval",
      requestedApis: user.requestedApis,
      allowedApis: user.allowedApis
    });
}

export default requestController