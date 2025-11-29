import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

def send_confirmation_email(to_email: str, name: str, amount: int, payment_id: str, registration_date):
    if not SMTP_USER or not SMTP_PASSWORD:
        print("SMTP credentials not set. Skipping email.")
        return

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER
    msg['To'] = to_email
    msg['Subject'] = "Registration Confirmed - Tronix365 40-Day Internship"

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background-color: #0a0a0a; color: #ffffff; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #00f7ff; border-radius: 10px; padding: 20px;">
            <h1 style="color: #00f7ff; text-align: center;">Welcome to Tronix365!</h1>
            <p>Dear {name},</p>
            <p>Your registration for the <strong>40-Day Embedded & IoT Internship</strong> has been confirmed.</p>
            
            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h2 style="color: #8338ec; margin-top: 0;">Payment Details:</h2>
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Amount Paid:</strong> ₹{amount}</li>
                    <li><strong>Payment ID:</strong> {payment_id}</li>
                    <li><strong>Date:</strong> {registration_date}</li>
                </ul>
            </div>

            <div style="background-color: #1a1a1a; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h2 style="color: #8338ec; margin-top: 0;">Program Details:</h2>
                <ul style="list-style: none; padding: 0;">
                    <li><strong>Start Date:</strong> December 22, 2025</li>
                    <li><strong>Duration:</strong> 40 Days</li>
                    <li><strong>Mode:</strong> 100% Hands-on</li>
                </ul>
            </div>

            <p>We're excited to have you join us!</p>
            <p style="color: #888;">Best regards,<br>Team Tronix365</p>
        </div>
    </body>
    </html>
    """

    msg.attach(MIMEText(html_body, 'html'))

    try:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        print(f"Email sent to {to_email}")
    except Exception as e:
        print(f"Failed to send email: {e}")

def send_admin_coupon_email(new_code: str):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    
    if not all([smtp_host, smtp_port, smtp_user, smtp_password]):
        print("SMTP credentials not set. Skipping admin email.")
        return

    subject = "New Coupon Code Generated"
    body = f"""
    <html>
        <body>
            <h2>New Coupon Code Generated</h2>
            <p>A coupon was just used. Here is the new code for the next student:</p>
            <h1 style="color: #00f7ff; background: #111; padding: 10px; display: inline-block;">{new_code}</h1>
            <p>Share this code with the next student.</p>
        </body>
    </html>
    """
    
    msg = MIMEMultipart()
    msg['From'] = smtp_user
    msg['To'] = smtp_user  # Send to self (Admin)
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'html'))
    
    try:
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)
        server.quit()
        print(f"Admin coupon email sent to {smtp_user}")
    except Exception as e:
        print(f"Failed to send admin email: {e}")
