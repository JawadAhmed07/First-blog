import Email from '@/app/models/email';
import { connectDb } from '@/app/utils/dbconnect';
import { sendEmail } from '@/app/utils/sendemail';

export async function POST(req) {
    const { email } = await req.json();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return new Response(JSON.stringify({ message: 'Invalid email address' }), { status: 400 });
    }

    try {
        await connectDb();

        // Save email to MongoDB
        const newEmail = new Email({ email });
        await newEmail.save();

        // Send notification email
        await sendEmail({
            to: process.env.ADMIN_EMAIL,
            subject: 'New Subscriber',
            text: `A new email has subscribed: ${email}`,
        });

        return new Response(JSON.stringify({ message: 'Subscription successful!' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Something went wrong!' }), { status: 500 });
    }
}
