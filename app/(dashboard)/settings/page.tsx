import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function SettingPage() {
    const session = await auth();
    let userId = session?.user?.id;

    if (!userId) return;

    return (
        <>
            <Profile id={userId} />
        </>
    )
};
