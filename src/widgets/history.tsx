import React, { createContext, useContext, useState, useCallback } from 'react'
import { Breadcrumb, Breadcrumbs, IBreadcrumbProps, Icon } from '@blueprintjs/core'
import { useMainContext } from '../hooks/context'
import { HOME } from '../logic/db'

function asItems(history, setQuery): IBreadcrumbProps[] {
    return history.map(item => {
        const text = item == HOME ? 'Home' : item
        return {
            onClick: () => { setQuery(item) },
            text
        }
    })
}

const renderCurrentBreadcrumb = ({ text, ...restProps }: IBreadcrumbProps) => {
    return <Breadcrumb className='breadcrumb' {...restProps}><small>{text}</small></Breadcrumb>;
};

export function History() {
    const { history, historyPos, setQuery } = useMainContext()

    if (history.length <= 1) {
        return null
    }

    const slicedHistory = history.slice(0, history.length + historyPos)
    const items = asItems(slicedHistory, setQuery)

    return (
        <Breadcrumbs
            minVisibleItems={2}
            breadcrumbRenderer={renderCurrentBreadcrumb}
            items={items}
        />
    )
} 