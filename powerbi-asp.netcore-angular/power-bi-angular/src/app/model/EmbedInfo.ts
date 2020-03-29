import { models } from 'powerbi-client';

export interface EmbedInfo {
    embedToken: {
        expiration: string;
        token: string;
        tokenId: string;
    };
    embedUrl: string;
    reportId: string;
    viewMode?: models.ViewMode;
    permissions?: models.Permissions;
    filterPaneEnabled: boolean;
    navContentPaneEnabled: boolean;
}

