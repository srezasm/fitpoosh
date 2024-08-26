// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gEDnAkutJxpj72EWzRAHSD

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: d6AvkPHzg3AM/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: Z1aQUH43SeyY/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: If33Q6BnWHWJ/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, fragmentProps, growthBookProps, splunkProps } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : undefined
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      primaryColor={
        fragmentProps && "primaryColor" in fragmentProps
          ? fragmentProps.primaryColor!
          : "#000000"
      }
      rtl={
        fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : undefined
      }
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          {children}
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
