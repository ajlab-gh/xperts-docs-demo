# Accessing your Azure Account

This Hands-on-Lab is configured to allow each student to have their own training lab environment using pre-created Azure resource groups, all in one shared Azure Subscription.

??? note "Accessing the Azure Portal: Login Instructions"
    ##Accessing the Azure Portal

    Browse to <a href="https://portal.azure.com" target="_blank">https://portal.azure.com</a>

    Use the credentials provided to you by your instructors.
    
    If you can't find them, check your junk mail folder. Look for an email with the subject line: **MIS - Xperts Summit - Public Cloud Track - AZURE LAB Credentials**.

    **Username**: xpaca**XX**@azurestorefortinet.onmicrosoft.com

    ![](img/lab0-image1.png)

    **Password**: <*password provided by email*\>

    ![](img/lab0-image2.png)

    Click to log in, and optionally select "Yes" to stay signed in.

    ![](img/lab0-image3.png)

    When the **Welcome to Microsoft Azure** window appears, skip the tour.

    ![](img/lab0-image4.png)

    Now that you've signed in, you are on the Azure Portal Dashboard.
    
    Notice your **username** in the top right corner.

??? note "Changing Your Password"
    ## Changing Your Password
    Click on your **username** located in the top-right corner of the screen.

    ![](img/lab0-image5.png)

    Select **View Account**. This action will automatically open a new tab.

    ![](img/lab0-image6.png)

    You can skip the Microsoft feedback in this new tab.

    ![](img/lab0-image7.png)

    Scroll down, if needed, and click on **Change Password**.

    ![](img/lab0-image8.png)

    Fill in the required fields to change your password and click **Submit**.

    ![](img/lab0-image9.png)

    Once you see the confirmation screen, you can close this tab. Your password has been successfully changed.

    ![](img/lab0-image10.png)

??? note "Switching Language Settings"
    ## Switching Language Settings

    If you wish to change the language of your Azure dashboard, follow these steps.

    After logging into your Azure account, click on the **gear icon** in the upper-right corner.

    ![](img/lab0-image11.png)

    Next, select **Language + Regional Format**.

    ![](img/lab0-image12.png)

    Choose your preferred language and regional format.

    For example, if you select “English (Canada)," it will change the Dashboard language to Canadian English.

    ![](img/lab0-image13.png)

    Click **Apply**. A message will appear asking for confirmation. Click **OK** to confirm the language change.

    ![](img/lab0-image14.png)

??? note "Verifying Resource Groups"
    ## Verifying Resource Groups

    In a new Azure subscription account, only two resource groups will be pre-existing. These will be used in this lab for security customization.

    Navigate to **Resource Groups** on the main page.

    ![](img/lab0-image16.png)

    Make sure **two** resource groups are displayed, prefixed with your student number.

    ![](img/lab0-image17.png)

??? warning "Launching CLI & Setting Up Storage Account (mandatory)"
    ## Launching CLI & Setting Up Storage Account
    
    We'll next connect to the **Azure CLI**, which plays a key role in facilitating automated deployments. To do this, you'll need to have a storage account configured.

    Click on the **CLI Icon**, found in the top-right corner.

    ![](img/lab0-image18.png)

    This will open the CLI Shell at the bottom of the screen. Select **Bash Shell**.

    ![](img/lab0-image19.png)

    Select your **FTNT-Training** subscription and click on **Show Advanced Settings**.

    ![](img/lab0-image20.png)

    These advanced settings allow you to select existing resources. Note that the default settings may not align with where our Resource Groups are located.

    Adjust your settings to match the example below. **Note**: Your student number may differ.

    ![](img/lab0-image22.png)

    You are now welcomed to the *Azure Cloud Shell*.

    ![](img/lab0-image23.png)

    Congratulation! You are all set to proceed with the lab activities.
