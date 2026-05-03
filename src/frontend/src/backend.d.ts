import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContentBlock {
    key: string;
    title: string;
    content: string;
    updatedAt: Time;
}
export interface ProductListing {
    id: bigint;
    features: Array<string>;
    name: string;
    createdAt: Time;
    description: string;
    isActive: boolean;
    price: string;
}
export interface JobListing {
    id: bigint;
    title: string;
    jobType: string;
    createdAt: Time;
    description: string;
    isActive: boolean;
    department: string;
    requirements: Array<string>;
    location: string;
}
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    subject: string;
    name: string;
    createdAt: Time;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    createJobListing(title: string, department: string, location: string, jobType: string, description: string, requirements: Array<string>): Promise<bigint>;
    createProductListing(name: string, description: string, features: Array<string>, price: string): Promise<bigint>;
    deleteJobListing(id: bigint): Promise<void>;
    deleteProductListing(id: bigint): Promise<void>;
    getActiveJobListings(): Promise<Array<JobListing>>;
    getActiveProductListings(): Promise<Array<ProductListing>>;
    getAllContentBlocks(): Promise<Array<ContentBlock>>;
    getAllJobListings(): Promise<Array<JobListing>>;
    getAllProductListings(): Promise<Array<ProductListing>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getContentBlock(key: string): Promise<ContentBlock | null>;
    seedDefaultContent(): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, subject: string, message: string): Promise<void>;
    updateContentBlock(key: string, title: string, content: string): Promise<void>;
    updateJobListing(id: bigint, title: string, department: string, location: string, jobType: string, description: string, requirements: Array<string>, isActive: boolean): Promise<void>;
    updateProductListing(id: bigint, name: string, description: string, features: Array<string>, price: string, isActive: boolean): Promise<void>;
}
