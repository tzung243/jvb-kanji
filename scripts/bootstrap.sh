node --version 

# Install dependencies

if [ $? -eq 0 ]; then
#   echo "Installing dependencies..."
#   npm install
else
  echo "Node not found. Please install Node.js"
  exit 1
fi