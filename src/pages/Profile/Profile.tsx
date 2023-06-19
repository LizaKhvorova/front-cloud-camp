import React from "react";
import { Card } from "ui/templates/Card";
import { ProfileForm } from "ui/organisms/ProfileForm";

export const Profile = () => {
    return (
        <Card padding="25px 0 290px 24px" maxWidth="900px">
            <ProfileForm />
        </Card>
    )
}