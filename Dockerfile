# Dockerfile

# Use node alpine as it's a small node image
FROM node

# Create the directory on the node image 
# where our Next.js app will live
RUN mkdir -p /next-admin

# Set /next-admin as the working directory
WORKDIR /next-admin

# Copy package.json and package-lock.json
# to the /next-admin working directory
COPY package*.json /next-admin/

# Install dependencies in /next-admin
RUN npm install

# Copy the rest of our Next.js folder into /next-admin
COPY . /next-admin

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run npm dev, as we would via the command line 
CMD ["npm", "run", "dev"]