# Use official PHP image with Apache
FROM php:8.1-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies & PHP extensions needed for Laravel
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    libonig-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-install zip pdo pdo_mysql mbstring exif pcntl bcmath gd

# Enable apache mod_rewrite for Laravel routing
RUN a2enmod rewrite

# Copy composer binary from composer image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy project files to working directory
COPY . .

# Install composer dependencies
RUN composer install --no-dev --optimize-autoloader

# Generate application key
RUN php artisan key:generate

# Set permissions for storage and bootstrap cache
RUN chown -R www-data:www-data storage bootstrap/cache

# Expose port 80 for web traffic
EXPOSE 80

# Start apache server
CMD ["apache2-foreground"]
