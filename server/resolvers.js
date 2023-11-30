import { getJob, getJobs, getJobsByCompany } from "./db/jobs.js";
import { getCompany } from "./db/companies.js";

export const resolvers = {
    Query: {
        job: (_root, {id}) => getJob(id),
        company: (_root, {id}) => getCompany(id),
        jobs: () => getJobs(),
    },

    Job: {
        date: (job) => {
            return toIsoDate(job.createdAt);
        },
        company: (job) => {
            return getCompany(job.companyId);
        }
    },

    Company: {
        jobs: ({id}) => getJobsByCompany(id)
    }

};

function toIsoDate(value) {
    return value.slice(0,'yyyy-mm-dd'.length);
};