import { SpeedInsights } from "@vercel/speed-insights/next"
export default SpeedInsights({
  token: process.env.SPEED_INSIGHTS_TOKEN,
}) 
