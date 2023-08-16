import React from "react";
import {Formik, useFormik} from "formik";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

type FormikErrorType = {
    email?: string;
    password?: string;
};
export type ProfileDescriptionFormType = {
    profile: {
        userId: number,
        fullName: string,
        aboutMe: string,
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        contacts: {
            facebook: string,
            github: string,
            instagram: string,
            mainLink: string,
            twitter: string,
            vk: string,
            website: string,
            youtube: string,
        },

    }

}
const ProfileDescriptionForm = ({profile}: ProfileDescriptionFormType) => {
    const formik = useFormik({
        initialValues: {
            ...profile
        },
        onSubmit: (values) => {
            formik.resetForm()

        },
    })
    return (
        <FormGroup>
            <TextField label='fullName' margin="normal" {...formik.getFieldProps("fullName")} />
            {formik.touched.fullName && formik.errors.fullName &&
                <div style={{color: "red"}}>{formik.errors.fullName}</div>}

            <TextField label='lookingForAJob' margin="normal" {...formik.getFieldProps("lookingForAJob")} />
            {formik.touched.lookingForAJob && formik.errors.lookingForAJob && (
                <div style={{color: "red"}}>{formik.errors.lookingForAJob}</div>
            )}

            <TextField label='aboutMe' margin="normal" {...formik.getFieldProps("aboutMe")} />
            {formik.touched.aboutMe && formik.errors.aboutMe && (
                <div style={{color: "red"}}>{formik.errors.aboutMe}</div>
            )}

            <TextField label='github' margin="normal" {...formik.getFieldProps("github")} />
            {formik.touched.contacts?.github && formik.errors.contacts?.github
                && (<div style={{ color: "red" }}>{formik.errors.contacts?.github}</div>)
            }

            <TextField label='vk' margin="normal" {...formik.getFieldProps("vk")} />
            {formik.touched.contacts?.vk && formik.errors.contacts?.vk && (
                <div style={{color: "red"}}>{formik.errors.contacts?.vk}</div>
            )}

            <TextField label='facebook' margin="normal" {...formik.getFieldProps("facebook")} />
            {formik.touched.contacts?.facebook && formik.errors.contacts?.facebook && (
                <div style={{color: "red"}}>{formik.errors.contacts?.facebook}</div>
            )}
            <TextField label='instagram' margin="normal" {...formik.getFieldProps("instagram")} />
            {formik.touched.contacts?.instagram && formik.errors.contacts?.instagram && (
                <div style={{color: "red"}}>{formik.errors.contacts?.instagram}</div>
            )}
            <TextField label='twitter' margin="normal" {...formik.getFieldProps("twitter")} />
            {formik.touched.contacts?.twitter && formik.errors.contacts?.twitter && (
                <div style={{color: "red"}}>{formik.errors.contacts?.twitter}</div>
            )}
            <TextField label='website' margin="normal" {...formik.getFieldProps("website")} />
            {formik.touched.contacts?.website && formik.errors.contacts?.website && (
                <div style={{color: "red"}}>{formik.errors.contacts?.website}</div>
            )}
            <TextField label='youtube' margin="normal" {...formik.getFieldProps("youtube")} />
            {formik.touched.contacts?.youtube && formik.errors.contacts?.youtube && (
                <div style={{color: "red"}}>{formik.errors.contacts?.youtube}</div>
            )}
            <TextField label='mainLink' margin="normal" {...formik.getFieldProps("mainLink")} />
            {formik.touched.contacts?.mainLink && formik.errors.contacts?.mainLink && (
                <div style={{color: "red"}}>{formik.errors.contacts?.mainLink}</div>
            )}


            {/*<FormControlLabel*/}
            {/*    label={"Remember me"}*/}
            {/*    control={<Checkbox checked={formik.values.rememberMe} {...formik.getFieldProps("rememberMe")} />}*/}
            {/*/>*/}
            <Button type={"submit"} variant={"contained"} color={"primary"}>
                Save
            </Button>
        </FormGroup>
    )

};

export default ProfileDescriptionForm