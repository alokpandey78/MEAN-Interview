## What is the command to clear and flush magento cache
 To clean the cache 
  php bin/magento cache:clean
  To flush cache
  php bin/magento cache:flush

## In which directory we write our own custom module in Magento2
If we need to create our own module e.g Hello World then we define it in
app/code folder. It will be app/code/VendorName/moduleName.
e.g : app/code/Letsknowit/Hello_world.

## What is Magento?
Magento is an ecommerce platform that enables companies to run and manage their ecommerce sites in an optimized way. Magento functions as an open source ecommerce management system. It was first published by a Varien Inc in 2008, before being sold to eBay and ultimately spun off into its own entity. The 2.0 version of Magento arrived in November of 2015 and has improved the platform across the board.

## Which are the methods of PayPal Payment Gateways?
The two methods of PayPal Payment Gateways are:
	Payflow Pro (Includes Express Checkout)
	Payflow Link (Includes Express Checkout)

## Why is Magento valuable for businesses?
Magento is valuable for businesses because it gives them a high level of control and flexibility when they are managing the look, functionality, and content of their ecommerce store. The Magento software is both extremely convenient, and extremely effective for running an ecommerce operation.
Further, it has a number of features that make operating an ecommerce site easier compared to other options. Many of these features revolve around how financial transactions are made, and how content can be uploaded and optimized for search engine rankings.  

## What are disadvantages of Magento?
The disadvantages of Magento are:
	Magento uses larger disk space and memory.
	It takes much time to build the customized functionality.
	It is very slow compared to other E-commerce sites.
	It needs proper hosting environment, if the hosting environment is improper the user can face the problems.

## What are the different versions of Magento?
Magento categorizes their product across multiple offerings:
```
	Magento Commerce
	Magento Order Management
	Magento Business Intelligence
	Magento Shipping
	Magento Social
	Magento Open Source
```

## How to enable Maintenance mode in Magento?
To enable Magento Maintenance mode, create  a file named maintenance.flag and upload to your Magento home directory. The file contains the following code:
```
$maintenanceFile = ‘maintenance.flag’;
if (file_exists($maintenanceFile)) {
include_once dirname(__FILE__) . ‘/errors/503.php’;
exit;
}
```

## Name the web-server that supports magento?
The Web-server that supports Magento are:
	Apache 2.x
	Nginx 1.7.x

## What are some of the top features of Magento?
```
	Payment
	Reporting and Analytics
	Customer Accounts
	Product and Catalogue Browsing
	Site Management
	Search Engine Optimization
	Customer Accounts
	International Support
	Checkout
	Marketing Promotion and Tools
	Order Management
```

## Name the product types that are available in magento?
The product types available in Magento are:
```
	Simple Products
	Grouped Products
	Configurable Products
	Virtual Products
	Bundled Products
	Downloadable Products
```

## Are there any limitations to the Magento software?
The Magento software is extremely useful and is one of the top ecommerce platforms available on the market. However, it does require a lot of space and memory. Furthermore, it requires object oriented programming in order to prevent turning into a very complex system. Finally, Magento can be slow in terms of performance, at times. However, these limitations are usually not a significant concern in most cases, and the benefits provided by the Magento Software usually far outweigh any potential issues.

## How do you create a custom module in Magento?
Basically there are 4 steps to create Magento custom module:
```
Namespace : Mag
Module Name : Magentoexplorer
1. Create module directory Magentoexplorer in app/code/local/Mag
2. Create controller, block and module files for your module.
3. Create module configuration file (app/code/local/Mag/Magentoexplorer/etc/config.xml).
4. Create xml file (app/etc/modules/Mag_ Magentoexplorer.xml) so that you can enable or disable module and tell magento system from which code pool that module will be taken.
You can take a look at this tutorial to learn how to create a basic Magento custom module: https://magentoexplorer.com/how-to-create-basic-magento-hello-world-module-from-scratch-in-magento-1-8-and-1-9
Or for Magento 2 Building a Magento module from scratch
```

## How can you improve the performance of Magento?
There are a number of things that you can do to enhance and improve Magento performance.
Doing all of the following can improve Magento performance.
```
	Disabling any modules that are not being used
	Disabling the Magento log
	MySQL Query Caching
	Optimizing your image
	Enabling Gzip Compression
	Enabling Magento Caching
	Combining the external CSS/JS into a single file
```

## Which billing information can be managed through Magento?
All of the following things can be managed from the client account.
```
	Adding a credit card
	Adding a PayPal account
	Updating a billing address
	Producing a print-ready receipt
	Viewing your billing history
```

## How many design patterns does Magento Have?
Magento has a total of 12 design patterns. These patterns include:
```
	Factory Pattern
	Singleton Pattern
	Model View Controller Pattern
	Front Controller Pattern
	Registry Pattern
	Prototype Pattern
	Iterator Pattern
	Object Pool Pattern
	Service Locator Pattern
	Lazy Loading Pattern
	Observer Pattern
	Module Pattern
```
## How many tables will be created when you make a new EAV module?
If you make a new EAV module, then 6 tables will be created. These tables include:
module_datetime, module, module_decimal, module_int, module_text, and module_varchar.

