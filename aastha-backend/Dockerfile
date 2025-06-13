# Use official PHP image with Apache
FROM php:8.1-apache

# Set working directory inside the container
WORKDIR /var/www/html

# Install system dependencies and PHP extensions required by Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install zip pdo pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Apache mod_rewrite for Laravel routing
RUN a2enmod rewrite

# Copy composer binary from the official composer image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy your project files into the container
COPY . .

# Install PHP dependencies without dev packages and optimize autoloader
RUN composer install --no-dev --optimize-autoloader

# Generate Laravel application key
RUN php artisan key:generate

# Set permissions for storage and bootstrap cache directories
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80 to the outside of the container
EXPOSE 80

# Start Apache in the foreground
CMD ["apache2-foreground"]
