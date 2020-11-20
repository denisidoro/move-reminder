import React, { createContext, useContext, useState, useCallback } from 'react'
import { Breadcrumb, Breadcrumbs, IBreadcrumbProps, Icon } from '@blueprintjs/core'

const BREADCRUMBS: IBreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];

const renderCurrentBreadcrumb = ({ text, ...restProps }: IBreadcrumbProps) => {
    // customize rendering of last breadcrumb
    return <Breadcrumb {...restProps}>{text}</Breadcrumb>;
};

export function BreadcrumbsExample() {
    return (
        <Breadcrumbs
            currentBreadcrumbRenderer={renderCurrentBreadcrumb}
            items={BREADCRUMBS}
            minVisibleItems={2}
        />
    )
} 