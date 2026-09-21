const RENDER_API_KEY = process.env.RENDER_API_KEY;
const GITHUB_REPO = "https://github.com/wanjikudigitaldesignservices-cyber/university-ims";

if (!RENDER_API_KEY) {
  console.error("❌ ERROR: Please set the RENDER_API_KEY environment variable.");
  process.exit(1);
}

const API_BASE = "https://api.render.com/v1";
const HEADERS = {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": `Bearer ${RENDER_API_KEY}`
};

async function getOwnerId() {
  console.log("🔍 Fetching Owner ID...");
  const res = await fetch(`${API_BASE}/owners`, { headers: HEADERS });
  const data = await res.json();
  if (Array.isArray(data) && data.length > 0) {
    return data[0].owner.id;
  }
  throw new Error("Could not fetch owner ID. Check API key.");
}

async function createWebService(serviceName, rootDir, ownerId) {
  console.log(`🛠️  Deploying Web Service: ${serviceName}...`);
  const res = await fetch(`${API_BASE}/services`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      type: 'web_service',
      name: serviceName,
      ownerId: ownerId,
      repo: GITHUB_REPO,
      autoDeploy: 'yes',
      branch: 'master',
      serviceDetails: {
        env: 'docker',
        plan: 'free',
        region: 'ohio',
        rootDir: rootDir,
        envVars: []
      }
    })
  });
  const data = await res.json();
  if (data.message) {
      console.log(`Note: ${data.message}`);
  } else {
      console.log(`✅ Service Created! Live URL: ${data.service?.serviceDetails?.url || data.service?.url}`);
  }
  return data;
}

async function run() {
  console.log("🚀 Starting Render Backend Deployment...");
  try {
    const ownerId = await getOwnerId();
    console.log(`✅ Found Owner ID: ${ownerId}`);
    
    await createWebService('university-gateway', 'apps/gateway', ownerId);
    console.log("⏳ Waiting 2 seconds to avoid rate limits...");
    await new Promise(resolve => setTimeout(resolve, 2000));
    await createWebService('university-identity', 'apps/identity-svc', ownerId);
    
    console.log("✅ Deployment scripts issued to Render. Check your Render Dashboard for build progress!");
  } catch (err) {
    console.error("Deployment failed:", err);
  }
}

run();
