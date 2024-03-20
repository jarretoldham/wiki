"use client";

import React from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";
import { MarkdocTabs } from "@/types";

export function AppTabs({
  variant,
  size,
  fullWidth,
  color,
  labels,
}: MarkdocTabs) {
  return (
    <div className="flex w-full flex-col">
      <Tabs variant={variant} size={size} fullWidth={fullWidth} color={color}>
        {labels.map((label: any) => (
          <Tab key={label.label} title={label.label}>
            <Card className="bg-zinc-300 border-zinc-400 dark:bg-zinc-800 dark:border-zinc-600">
              <CardBody>{label.children}</CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
