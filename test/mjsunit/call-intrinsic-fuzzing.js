// Copyright 2020 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-for-fuzzing

// Test whitelisted/blacklisted intrinsics in the context of fuzzing.

// Blacklisted intrinsics are replaced with undefined.
assertEquals(undefined, %GetOptimizationStatus(function (){}));

// Blacklisted intrinsics can have wrong arguments.
%GetOptimizationStatus(1, 2, 3, 4);

// We don't care if an intrinsic actually exists.
assertEquals(undefined, %FooBar());

// Check whitelisted intrinsic.
assertNotEquals(undefined, %IsBeingInterpreted());
