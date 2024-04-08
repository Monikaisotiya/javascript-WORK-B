import React, { Suspense, lazy } from "react";
import pMinDelay from "p-min-delay";
const ToDolist = lazy(() => pMinDelay(import("./../Lifecycle/ToDolist"), 2000));

const Loder = () => {
  return (
    <>
      <Suspense
        fallback={
          <div class="loader">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        }
      >
        <ToDolist />
      </Suspense>
    </>
  );
};

export default Loder;
