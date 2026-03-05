#!/bin/bash

# Taxi Service Website - Setup Script
# This script sets up the Next.js development environment

echo "🚗 Setting up Taxi Service Website..."
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "Please upgrade Node.js and try again."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Copy environment variables
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📝 Creating environment variables file..."
    cp .env.example .env.local
    echo "✅ Created .env.local from template"
    echo "⚠️  Please edit .env.local with your actual values before development"
else
    echo "✅ Environment file already exists"
fi

# Create initial content (if needed)
echo ""
echo "📁 Checking project structure..."

# Check if all required directories exist
REQUIRED_DIRS=("src/app" "src/components" "src/data" "src/utils" "src/types" "public")
for dir in "${REQUIRED_DIRS[@]}"; do
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        echo "✅ Created directory: $dir"
    fi
done

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your contact information"
echo "2. Add your photos to the public/ directory"
echo "3. Run 'npm run dev' to start development"
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "Commands:"
echo "  npm run dev      - Start development server"
echo "  npm run build    - Build for production"
echo "  npm run export   - Export static files"
echo "  npm run deploy   - Deploy to GitHub Pages"
echo ""
echo "Happy coding! 🚀"