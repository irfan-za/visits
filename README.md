# Visits.id - Documentation

## Description
Visits.id is a URL shortening service that allows users to create short links that are easy to remember and use.

## Key Features
1. **URL Shortening**: The service allows users to create shorter and more user-friendly URLs compared to the original long URLs.

2. **Visit Statistics**: Each created link will have visit statistics, including the total number of visits and related information.

3. **Link Management**: Users can view, edit, and delete the links they have created through the management interface.

## Usage

### 1. Creating Short Links
- Users can create short links by entering the original long URL into the link creation form.
- The generated short link can be copied and shared.

### 2. Visit Statistics
- Each created link has a visit statistics page that can be accessed by the link owner.
- Statistics include the total number of visits, creation date, and other relevant information.

### 3. Link Management
- Registered users can manage their links through the management interface.
- Users can view a list of links, edit link information, and delete unnecessary links.

## Installation and Configuration

1. **Install Dependencies**
   ```bash
   yarn
   ```
2. **Setting ENV**
   ```bash
    NEXT_PUBLIC_SUPABASE_URL=Your supabase url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=Your public supabase key
   ```
3. **Run Project**
   ```bash
   yarn dev
   ```
