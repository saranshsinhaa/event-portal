FROM node:18-alpine

WORKDIR /app

# Copy package.json and yarn.lock to the work directory
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port Next.js app runs on
EXPOSE 3000

# Command to run the Next.js app
CMD ["yarn", "start"]
