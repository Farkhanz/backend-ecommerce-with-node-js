const { verifyToken } = require("../middleware/VerifyToken");
const { refreshToken } = require("../server/RefreshToken");
const handlers = require('./handlers/merchants')

const router = express.Router();

router.post('/login', login);
router.get('/token', refreshToken);

module.exports = router;