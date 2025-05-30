echo "Installing production dependencies..."
npm install dotenv@^16.5.0
npm install express@^5.1.0
npm install mongodb@^6.16.0
npm install mongoose@^8.15.1

echo "Installing development dependencies..."
npm install --save-dev @types/express@^5.0.2
npm install --save-dev @types/mongoose@^5.11.96
npm install --save-dev @types/node@^22.15.24
npm install --save-dev nodemon@^3.1.10
npm install --save-dev ts-node@^10.9.2
npm install --save-dev typescript@^5.8.3

echo "All dependencies installed successfully!"